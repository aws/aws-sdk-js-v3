import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DisableLDAPSRequest, DisableLDAPSResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableLDAPSCommandInput = DisableLDAPSRequest;
export declare type DisableLDAPSCommandOutput = DisableLDAPSResult & __MetadataBearer;
export declare class DisableLDAPSCommand extends $Command<DisableLDAPSCommandInput, DisableLDAPSCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DisableLDAPSCommandInput;
    constructor(input: DisableLDAPSCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableLDAPSCommandInput, DisableLDAPSCommandOutput>;
    private serialize;
    private deserialize;
}
