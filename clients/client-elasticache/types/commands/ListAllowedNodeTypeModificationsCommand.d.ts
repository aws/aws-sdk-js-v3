import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAllowedNodeTypeModificationsCommandInput = ListAllowedNodeTypeModificationsMessage;
export declare type ListAllowedNodeTypeModificationsCommandOutput = AllowedNodeTypeModificationsMessage & __MetadataBearer;
export declare class ListAllowedNodeTypeModificationsCommand extends $Command<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ListAllowedNodeTypeModificationsCommandInput;
    constructor(input: ListAllowedNodeTypeModificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
