import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUserDefinedFunctionCommandInput = GetUserDefinedFunctionRequest;
export declare type GetUserDefinedFunctionCommandOutput = GetUserDefinedFunctionResponse & __MetadataBearer;
export declare class GetUserDefinedFunctionCommand extends $Command<GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetUserDefinedFunctionCommandInput;
    constructor(input: GetUserDefinedFunctionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
