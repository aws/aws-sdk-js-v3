import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListVPCAssociationAuthorizationsRequest, ListVPCAssociationAuthorizationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVPCAssociationAuthorizationsCommandInput = ListVPCAssociationAuthorizationsRequest;
export declare type ListVPCAssociationAuthorizationsCommandOutput = ListVPCAssociationAuthorizationsResponse & __MetadataBearer;
export declare class ListVPCAssociationAuthorizationsCommand extends $Command<ListVPCAssociationAuthorizationsCommandInput, ListVPCAssociationAuthorizationsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListVPCAssociationAuthorizationsCommandInput;
    constructor(input: ListVPCAssociationAuthorizationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVPCAssociationAuthorizationsCommandInput, ListVPCAssociationAuthorizationsCommandOutput>;
    private serialize;
    private deserialize;
}
