import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParametersRequest, GetParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetParametersCommandInput = GetParametersRequest;
export declare type GetParametersCommandOutput = GetParametersResult & __MetadataBearer;
export declare class GetParametersCommand extends $Command<GetParametersCommandInput, GetParametersCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParametersCommandInput;
    constructor(input: GetParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParametersCommandInput, GetParametersCommandOutput>;
    private serialize;
    private deserialize;
}
