import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateHostedZoneCommentCommandInput = UpdateHostedZoneCommentRequest;
export declare type UpdateHostedZoneCommentCommandOutput = UpdateHostedZoneCommentResponse & __MetadataBearer;
export declare class UpdateHostedZoneCommentCommand extends $Command<UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateHostedZoneCommentCommandInput;
    constructor(input: UpdateHostedZoneCommentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput>;
    private serialize;
    private deserialize;
}
