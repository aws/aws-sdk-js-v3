import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteHostedZoneRequest, DeleteHostedZoneResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHostedZoneCommandInput = DeleteHostedZoneRequest;
export declare type DeleteHostedZoneCommandOutput = DeleteHostedZoneResponse & __MetadataBearer;
export declare class DeleteHostedZoneCommand extends $Command<DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteHostedZoneCommandInput;
    constructor(input: DeleteHostedZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
