import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParameterRequest, GetParameterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetParameterCommandInput = GetParameterRequest;
export declare type GetParameterCommandOutput = GetParameterResult & __MetadataBearer;
export declare class GetParameterCommand extends $Command<GetParameterCommandInput, GetParameterCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParameterCommandInput;
    constructor(input: GetParameterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParameterCommandInput, GetParameterCommandOutput>;
    private serialize;
    private deserialize;
}
