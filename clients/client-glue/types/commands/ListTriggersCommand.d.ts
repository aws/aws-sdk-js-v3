import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListTriggersRequest, ListTriggersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTriggersCommandInput = ListTriggersRequest;
export declare type ListTriggersCommandOutput = ListTriggersResponse & __MetadataBearer;
export declare class ListTriggersCommand extends $Command<ListTriggersCommandInput, ListTriggersCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListTriggersCommandInput;
    constructor(input: ListTriggersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTriggersCommandInput, ListTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
