import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DisassociateVPCFromHostedZoneRequest, DisassociateVPCFromHostedZoneResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateVPCFromHostedZoneCommandInput = DisassociateVPCFromHostedZoneRequest;
export declare type DisassociateVPCFromHostedZoneCommandOutput = DisassociateVPCFromHostedZoneResponse & __MetadataBearer;
export declare class DisassociateVPCFromHostedZoneCommand extends $Command<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DisassociateVPCFromHostedZoneCommandInput;
    constructor(input: DisassociateVPCFromHostedZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
