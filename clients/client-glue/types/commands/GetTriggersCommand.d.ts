import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTriggersRequest, GetTriggersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTriggersCommandInput = GetTriggersRequest;
export declare type GetTriggersCommandOutput = GetTriggersResponse & __MetadataBearer;
export declare class GetTriggersCommand extends $Command<GetTriggersCommandInput, GetTriggersCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTriggersCommandInput;
    constructor(input: GetTriggersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTriggersCommandInput, GetTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
