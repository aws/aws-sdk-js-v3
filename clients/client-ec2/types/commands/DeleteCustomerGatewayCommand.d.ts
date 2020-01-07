import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteCustomerGatewayRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCustomerGatewayCommandInput = DeleteCustomerGatewayRequest;
export declare type DeleteCustomerGatewayCommandOutput = __MetadataBearer;
export declare class DeleteCustomerGatewayCommand extends $Command<DeleteCustomerGatewayCommandInput, DeleteCustomerGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteCustomerGatewayCommandInput;
    constructor(input: DeleteCustomerGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomerGatewayCommandInput, DeleteCustomerGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
