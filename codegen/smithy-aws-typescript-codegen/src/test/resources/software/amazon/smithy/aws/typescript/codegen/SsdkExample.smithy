namespace smithy.example

use aws.protocols#restJson1

@restJson1
service SsdkExample {
    version: "2019-10-15",
    operations: [GetFoo]
}

@http(method: "GET", uri:"/foo")
operation GetFoo {
    input: GetFooInput,
    output: GetFooOutput,
    errors: [GetFooError]
}

structure GetFooInput {}
structure GetFooOutput {}

@error("client")
structure GetFooError {}