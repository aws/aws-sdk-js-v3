import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { AssociateConfigurationItemsToApplicationRequest, AssociateConfigurationItemsToApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateConfigurationItemsToApplicationCommandInput = AssociateConfigurationItemsToApplicationRequest;
export declare type AssociateConfigurationItemsToApplicationCommandOutput = AssociateConfigurationItemsToApplicationResponse & __MetadataBearer;
export declare class AssociateConfigurationItemsToApplicationCommand extends $Command<AssociateConfigurationItemsToApplicationCommandInput, AssociateConfigurationItemsToApplicationCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: AssociateConfigurationItemsToApplicationCommandInput;
    constructor(input: AssociateConfigurationItemsToApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateConfigurationItemsToApplicationCommandInput, AssociateConfigurationItemsToApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
