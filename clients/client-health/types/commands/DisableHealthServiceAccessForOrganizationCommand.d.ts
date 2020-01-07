import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableHealthServiceAccessForOrganizationCommandInput = {};
export declare type DisableHealthServiceAccessForOrganizationCommandOutput = __MetadataBearer;
export declare class DisableHealthServiceAccessForOrganizationCommand extends $Command<DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DisableHealthServiceAccessForOrganizationCommandInput;
    constructor(input: DisableHealthServiceAccessForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
