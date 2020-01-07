import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTargetsForPolicyCommandInput = ListTargetsForPolicyRequest;
export declare type ListTargetsForPolicyCommandOutput = ListTargetsForPolicyResponse & __MetadataBearer;
export declare class ListTargetsForPolicyCommand extends $Command<ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListTargetsForPolicyCommandInput;
    constructor(input: ListTargetsForPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
