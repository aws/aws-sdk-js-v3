namespace smithy.example

use aws.protocols#restJson1

@restJson1
service ExampleService {
    version: "2019-10-15",
    operations: [GetFoo]
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