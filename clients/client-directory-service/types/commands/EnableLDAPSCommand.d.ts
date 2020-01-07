import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableLDAPSRequest, EnableLDAPSResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableLDAPSCommandInput = EnableLDAPSRequest;
export declare type EnableLDAPSCommandOutput = EnableLDAPSResult & __MetadataBearer;
export declare class EnableLDAPSCommand extends $Command<EnableLDAPSCommandInput, EnableLDAPSCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: EnableLDAPSCommandInput;
    constructor(input: EnableLDAPSCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableLDAPSCommandInput, EnableLDAPSCommandOutput>;
    private serialize;
    private deserialize;
}
