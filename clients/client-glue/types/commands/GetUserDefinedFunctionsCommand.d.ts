import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionsRequest, GetUserDefinedFunctionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUserDefinedFunctionsCommandInput = GetUserDefinedFunctionsRequest;
export declare type GetUserDefinedFunctionsCommandOutput = GetUserDefinedFunctionsResponse & __MetadataBearer;
export declare class GetUserDefinedFunctionsCommand extends $Command<GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetUserDefinedFunctionsCommandInput;
    constructor(input: GetUserDefinedFunctionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput>;
    private serialize;
    private deserialize;
}
