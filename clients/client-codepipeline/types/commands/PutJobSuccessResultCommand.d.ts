import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutJobSuccessResultInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutJobSuccessResultCommandInput = PutJobSuccessResultInput;
export declare type PutJobSuccessResultCommandOutput = __MetadataBearer;
export declare class PutJobSuccessResultCommand extends $Command<PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutJobSuccessResultCommandInput;
    constructor(input: PutJobSuccessResultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput>;
    private serialize;
    private deserialize;
}
