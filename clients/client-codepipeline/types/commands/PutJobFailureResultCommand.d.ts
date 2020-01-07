import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutJobFailureResultInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutJobFailureResultCommandInput = PutJobFailureResultInput;
export declare type PutJobFailureResultCommandOutput = __MetadataBearer;
export declare class PutJobFailureResultCommand extends $Command<PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutJobFailureResultCommandInput;
    constructor(input: PutJobFailureResultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput>;
    private serialize;
    private deserialize;
}
