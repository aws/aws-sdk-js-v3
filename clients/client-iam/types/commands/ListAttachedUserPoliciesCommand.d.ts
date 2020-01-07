import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedUserPoliciesRequest, ListAttachedUserPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAttachedUserPoliciesCommandInput = ListAttachedUserPoliciesRequest;
export declare type ListAttachedUserPoliciesCommandOutput = ListAttachedUserPoliciesResponse & __MetadataBearer;
export declare class ListAttachedUserPoliciesCommand extends $Command<ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAttachedUserPoliciesCommandInput;
    constructor(input: ListAttachedUserPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
