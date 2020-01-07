import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableHealthServiceAccessForOrganizationCommandInput = {};
export declare type EnableHealthServiceAccessForOrganizationCommandOutput = __MetadataBearer;
export declare class EnableHealthServiceAccessForOrganizationCommand extends $Command<EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: EnableHealthServiceAccessForOrganizationCommandInput;
    constructor(input: EnableHealthServiceAccessForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
