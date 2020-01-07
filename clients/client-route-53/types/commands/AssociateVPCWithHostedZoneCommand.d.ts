import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateVPCWithHostedZoneCommandInput = AssociateVPCWithHostedZoneRequest;
export declare type AssociateVPCWithHostedZoneCommandOutput = AssociateVPCWithHostedZoneResponse & __MetadataBearer;
export declare class AssociateVPCWithHostedZoneCommand extends $Command<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: AssociateVPCWithHostedZoneCommandInput;
    constructor(input: AssociateVPCWithHostedZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
