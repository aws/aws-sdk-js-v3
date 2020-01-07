import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteEgressOnlyInternetGatewayRequest, DeleteEgressOnlyInternetGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEgressOnlyInternetGatewayCommandInput = DeleteEgressOnlyInternetGatewayRequest;
export declare type DeleteEgressOnlyInternetGatewayCommandOutput = DeleteEgressOnlyInternetGatewayResult & __MetadataBearer;
export declare class DeleteEgressOnlyInternetGatewayCommand extends $Command<DeleteEgressOnlyInternetGatewayCommandInput, DeleteEgressOnlyInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteEgressOnlyInternetGatewayCommandInput;
    constructor(input: DeleteEgressOnlyInternetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEgressOnlyInternetGatewayCommandInput, DeleteEgressOnlyInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
