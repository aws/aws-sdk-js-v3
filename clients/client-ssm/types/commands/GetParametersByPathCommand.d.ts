import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParametersByPathRequest, GetParametersByPathResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetParametersByPathCommandInput = GetParametersByPathRequest;
export declare type GetParametersByPathCommandOutput = GetParametersByPathResult & __MetadataBearer;
export declare class GetParametersByPathCommand extends $Command<GetParametersByPathCommandInput, GetParametersByPathCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParametersByPathCommandInput;
    constructor(input: GetParametersByPathCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParametersByPathCommandInput, GetParametersByPathCommandOutput>;
    private serialize;
    private deserialize;
}
