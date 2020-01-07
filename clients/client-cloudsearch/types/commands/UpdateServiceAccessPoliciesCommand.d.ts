import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateServiceAccessPoliciesRequest, UpdateServiceAccessPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServiceAccessPoliciesCommandInput = UpdateServiceAccessPoliciesRequest;
export declare type UpdateServiceAccessPoliciesCommandOutput = UpdateServiceAccessPoliciesResponse & __MetadataBearer;
export declare class UpdateServiceAccessPoliciesCommand extends $Command<UpdateServiceAccessPoliciesCommandInput, UpdateServiceAccessPoliciesCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: UpdateServiceAccessPoliciesCommandInput;
    constructor(input: UpdateServiceAccessPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceAccessPoliciesCommandInput, UpdateServiceAccessPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
