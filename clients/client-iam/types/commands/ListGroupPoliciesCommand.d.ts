import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupPoliciesRequest, ListGroupPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroupPoliciesCommandInput = ListGroupPoliciesRequest;
export declare type ListGroupPoliciesCommandOutput = ListGroupPoliciesResponse & __MetadataBearer;
export declare class ListGroupPoliciesCommand extends $Command<ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListGroupPoliciesCommandInput;
    constructor(input: ListGroupPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
