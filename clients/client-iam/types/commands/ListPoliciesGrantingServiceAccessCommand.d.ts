import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListPoliciesGrantingServiceAccessRequest, ListPoliciesGrantingServiceAccessResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPoliciesGrantingServiceAccessCommandInput = ListPoliciesGrantingServiceAccessRequest;
export declare type ListPoliciesGrantingServiceAccessCommandOutput = ListPoliciesGrantingServiceAccessResponse & __MetadataBearer;
export declare class ListPoliciesGrantingServiceAccessCommand extends $Command<ListPoliciesGrantingServiceAccessCommandInput, ListPoliciesGrantingServiceAccessCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListPoliciesGrantingServiceAccessCommandInput;
    constructor(input: ListPoliciesGrantingServiceAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPoliciesGrantingServiceAccessCommandInput, ListPoliciesGrantingServiceAccessCommandOutput>;
    private serialize;
    private deserialize;
}
