import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMLTransformCommandInput = DeleteMLTransformRequest;
export declare type DeleteMLTransformCommandOutput = DeleteMLTransformResponse & __MetadataBearer;
export declare class DeleteMLTransformCommand extends $Command<DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteMLTransformCommandInput;
    constructor(input: DeleteMLTransformCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput>;
    private serialize;
    private deserialize;
}
