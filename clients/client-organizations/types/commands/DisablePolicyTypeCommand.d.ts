import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DisablePolicyTypeRequest, DisablePolicyTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisablePolicyTypeCommandInput = DisablePolicyTypeRequest;
export declare type DisablePolicyTypeCommandOutput = DisablePolicyTypeResponse & __MetadataBearer;
export declare class DisablePolicyTypeCommand extends $Command<DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DisablePolicyTypeCommandInput;
    constructor(input: DisablePolicyTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput>;
    private serialize;
    private deserialize;
}
