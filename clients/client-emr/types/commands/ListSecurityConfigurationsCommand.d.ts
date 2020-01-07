import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListSecurityConfigurationsInput, ListSecurityConfigurationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSecurityConfigurationsCommandInput = ListSecurityConfigurationsInput;
export declare type ListSecurityConfigurationsCommandOutput = ListSecurityConfigurationsOutput & __MetadataBearer;
export declare class ListSecurityConfigurationsCommand extends $Command<ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListSecurityConfigurationsCommandInput;
    constructor(input: ListSecurityConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
