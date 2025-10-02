$version: "1.0"

namespace aws.test.generic

use aws.protocols#restJson1

@restJson1
service EchoService {
    version: "2018-05-10"
    operations: [
        Echo
        Length
    ]
}

@http(code: 200, method: "POST", uri: "/echo")
operation Echo {
    input: EchoInput
    output: EchoOutput
    errors: [
        PalindromeException
    ]
}

@readonly
@http(code: 200, method: "GET", uri: "/length/{string}")
operation Length {
    input: LengthInput
    output: LengthOutput
    errors: [
        PalindromeException
    ]
}

structure EchoInput {
    string: String
}

structure EchoOutput {
    string: String
}

structure LengthInput {
    @required
    @httpLabel
    string: String
}

structure LengthOutput {
    length: Integer
}

/// For some reason, this service does not like palindromes!
@httpError(400)
@error("client")
structure PalindromeException {
    message: String
}
