import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedGroupPoliciesRequest, ListAttachedGroupPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAttachedGroupPoliciesCommandInput = ListAttachedGroupPoliciesRequest;
export declare type ListAttachedGroupPoliciesCommandOutput = ListAttachedGroupPoliciesResponse & __MetadataBearer;
export declare class ListAttachedGroupPoliciesCommand extends $Command<ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAttachedGroupPoliciesCommandInput;
    constructor(input: ListAttachedGroupPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
