import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformRequest, GetMLTransformResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMLTransformCommandInput = GetMLTransformRequest;
export declare type GetMLTransformCommandOutput = GetMLTransformResponse & __MetadataBearer;
export declare class GetMLTransformCommand extends $Command<GetMLTransformCommandInput, GetMLTransformCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMLTransformCommandInput;
    constructor(input: GetMLTransformCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLTransformCommandInput, GetMLTransformCommandOutput>;
    private serialize;
    private deserialize;
}
