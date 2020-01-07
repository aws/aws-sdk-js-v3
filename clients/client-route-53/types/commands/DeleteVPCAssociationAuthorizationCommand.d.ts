import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteVPCAssociationAuthorizationRequest, DeleteVPCAssociationAuthorizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVPCAssociationAuthorizationCommandInput = DeleteVPCAssociationAuthorizationRequest;
export declare type DeleteVPCAssociationAuthorizationCommandOutput = DeleteVPCAssociationAuthorizationResponse & __MetadataBearer;
export declare class DeleteVPCAssociationAuthorizationCommand extends $Command<DeleteVPCAssociationAuthorizationCommandInput, DeleteVPCAssociationAuthorizationCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteVPCAssociationAuthorizationCommandInput;
    constructor(input: DeleteVPCAssociationAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVPCAssociationAuthorizationCommandInput, DeleteVPCAssociationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
