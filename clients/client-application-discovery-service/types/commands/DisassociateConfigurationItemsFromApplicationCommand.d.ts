import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DisassociateConfigurationItemsFromApplicationRequest, DisassociateConfigurationItemsFromApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateConfigurationItemsFromApplicationCommandInput = DisassociateConfigurationItemsFromApplicationRequest;
export declare type DisassociateConfigurationItemsFromApplicationCommandOutput = DisassociateConfigurationItemsFromApplicationResponse & __MetadataBearer;
export declare class DisassociateConfigurationItemsFromApplicationCommand extends $Command<DisassociateConfigurationItemsFromApplicationCommandInput, DisassociateConfigurationItemsFromApplicationCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DisassociateConfigurationItemsFromApplicationCommandInput;
    constructor(input: DisassociateConfigurationItemsFromApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateConfigurationItemsFromApplicationCommandInput, DisassociateConfigurationItemsFromApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
