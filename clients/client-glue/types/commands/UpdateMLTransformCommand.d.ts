import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateMLTransformRequest, UpdateMLTransformResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMLTransformCommandInput = UpdateMLTransformRequest;
export declare type UpdateMLTransformCommandOutput = UpdateMLTransformResponse & __MetadataBearer;
export declare class UpdateMLTransformCommand extends $Command<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateMLTransformCommandInput;
    constructor(input: UpdateMLTransformCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput>;
    private serialize;
    private deserialize;
}
