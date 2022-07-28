namespace smithy.example

use aws.protocols#restJson1

@aws.api#service(sdkId: "Not Same")
@restJson1
@aws.auth#sigv4(name: "notsame")
@documentation("some doc with ${str_to_escape}")
service OriginalName {
    version: "2019-10-15",
    operations: [GetFoo],
}

operation GetFoo {
    input: GetFooInput,
    output: GetFooOutput,
    errors: [GetFooError]
}

structure GetFooInput {}
structure GetFooOutput {}

@error("client")
structure GetFooError {}