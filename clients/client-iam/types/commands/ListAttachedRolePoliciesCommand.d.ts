import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedRolePoliciesRequest, ListAttachedRolePoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAttachedRolePoliciesCommandInput = ListAttachedRolePoliciesRequest;
export declare type ListAttachedRolePoliciesCommandOutput = ListAttachedRolePoliciesResponse & __MetadataBearer;
export declare class ListAttachedRolePoliciesCommand extends $Command<ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAttachedRolePoliciesCommandInput;
    constructor(input: ListAttachedRolePoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
