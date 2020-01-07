import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateUserDefinedFunctionRequest, UpdateUserDefinedFunctionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserDefinedFunctionCommandInput = UpdateUserDefinedFunctionRequest;
export declare type UpdateUserDefinedFunctionCommandOutput = UpdateUserDefinedFunctionResponse & __MetadataBearer;
export declare class UpdateUserDefinedFunctionCommand extends $Command<UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateUserDefinedFunctionCommandInput;
    constructor(input: UpdateUserDefinedFunctionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
