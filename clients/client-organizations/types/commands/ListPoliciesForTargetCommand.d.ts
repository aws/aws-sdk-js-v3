import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListPoliciesForTargetRequest, ListPoliciesForTargetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPoliciesForTargetCommandInput = ListPoliciesForTargetRequest;
export declare type ListPoliciesForTargetCommandOutput = ListPoliciesForTargetResponse & __MetadataBearer;
export declare class ListPoliciesForTargetCommand extends $Command<ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListPoliciesForTargetCommandInput;
    constructor(input: ListPoliciesForTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput>;
    private serialize;
    private deserialize;
}
