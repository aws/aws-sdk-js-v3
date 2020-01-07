import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateHostedZoneRequest, CreateHostedZoneResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHostedZoneCommandInput = CreateHostedZoneRequest;
export declare type CreateHostedZoneCommandOutput = CreateHostedZoneResponse & __MetadataBearer;
export declare class CreateHostedZoneCommand extends $Command<CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateHostedZoneCommandInput;
    constructor(input: CreateHostedZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
