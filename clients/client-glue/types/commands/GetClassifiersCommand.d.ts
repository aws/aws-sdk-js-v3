import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifiersRequest, GetClassifiersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetClassifiersCommandInput = GetClassifiersRequest;
export declare type GetClassifiersCommandOutput = GetClassifiersResponse & __MetadataBearer;
export declare class GetClassifiersCommand extends $Command<GetClassifiersCommandInput, GetClassifiersCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetClassifiersCommandInput;
    constructor(input: GetClassifiersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetClassifiersCommandInput, GetClassifiersCommandOutput>;
    private serialize;
    private deserialize;
}
