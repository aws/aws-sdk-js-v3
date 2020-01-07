import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUserImportJobsRequest, ListUserImportJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserImportJobsCommandInput = ListUserImportJobsRequest;
export declare type ListUserImportJobsCommandOutput = ListUserImportJobsResponse & __MetadataBearer;
export declare class ListUserImportJobsCommand extends $Command<ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUserImportJobsCommandInput;
    constructor(input: ListUserImportJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
