import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListKeyPoliciesRequest, ListKeyPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListKeyPoliciesCommandInput = ListKeyPoliciesRequest;
export declare type ListKeyPoliciesCommandOutput = ListKeyPoliciesResponse & __MetadataBearer;
export declare class ListKeyPoliciesCommand extends $Command<ListKeyPoliciesCommandInput, ListKeyPoliciesCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListKeyPoliciesCommandInput;
    constructor(input: ListKeyPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListKeyPoliciesCommandInput, ListKeyPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
