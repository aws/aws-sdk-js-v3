import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformsRequest, GetMLTransformsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMLTransformsCommandInput = GetMLTransformsRequest;
export declare type GetMLTransformsCommandOutput = GetMLTransformsResponse & __MetadataBearer;
export declare class GetMLTransformsCommand extends $Command<GetMLTransformsCommandInput, GetMLTransformsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMLTransformsCommandInput;
    constructor(input: GetMLTransformsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLTransformsCommandInput, GetMLTransformsCommandOutput>;
    private serialize;
    private deserialize;
}
