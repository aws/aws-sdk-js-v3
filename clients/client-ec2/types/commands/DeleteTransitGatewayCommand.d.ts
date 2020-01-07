import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayRequest, DeleteTransitGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTransitGatewayCommandInput = DeleteTransitGatewayRequest;
export declare type DeleteTransitGatewayCommandOutput = DeleteTransitGatewayResult & __MetadataBearer;
export declare class DeleteTransitGatewayCommand extends $Command<DeleteTransitGatewayCommandInput, DeleteTransitGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayCommandInput;
    constructor(input: DeleteTransitGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayCommandInput, DeleteTransitGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
