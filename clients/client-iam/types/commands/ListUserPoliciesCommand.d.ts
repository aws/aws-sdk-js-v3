import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUserPoliciesRequest, ListUserPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserPoliciesCommandInput = ListUserPoliciesRequest;
export declare type ListUserPoliciesCommandOutput = ListUserPoliciesResponse & __MetadataBearer;
export declare class ListUserPoliciesCommand extends $Command<ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListUserPoliciesCommandInput;
    constructor(input: ListUserPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
