import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListEntitiesForPolicyRequest, ListEntitiesForPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEntitiesForPolicyCommandInput = ListEntitiesForPolicyRequest;
export declare type ListEntitiesForPolicyCommandOutput = ListEntitiesForPolicyResponse & __MetadataBearer;
export declare class ListEntitiesForPolicyCommand extends $Command<ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListEntitiesForPolicyCommandInput;
    constructor(input: ListEntitiesForPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
