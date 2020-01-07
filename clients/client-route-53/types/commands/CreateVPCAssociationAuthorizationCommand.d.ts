import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateVPCAssociationAuthorizationRequest, CreateVPCAssociationAuthorizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVPCAssociationAuthorizationCommandInput = CreateVPCAssociationAuthorizationRequest;
export declare type CreateVPCAssociationAuthorizationCommandOutput = CreateVPCAssociationAuthorizationResponse & __MetadataBearer;
export declare class CreateVPCAssociationAuthorizationCommand extends $Command<CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateVPCAssociationAuthorizationCommandInput;
    constructor(input: CreateVPCAssociationAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
