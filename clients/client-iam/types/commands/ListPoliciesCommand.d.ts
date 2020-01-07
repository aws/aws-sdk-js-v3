import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPoliciesCommandInput = ListPoliciesRequest;
export declare type ListPoliciesCommandOutput = ListPoliciesResponse & __MetadataBearer;
export declare class ListPoliciesCommand extends $Command<ListPoliciesCommandInput, ListPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListPoliciesCommandInput;
    constructor(input: ListPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPoliciesCommandInput, ListPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
