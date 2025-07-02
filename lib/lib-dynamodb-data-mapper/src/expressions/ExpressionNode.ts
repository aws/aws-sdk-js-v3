export abstract class ExpressionNode {
  abstract accept<T>(visitor: ExpressionVisitor<T>): T;
}
