/**
 * <p>Information to use when checking for a successful response from a target.</p>
 */
export interface _Matcher {
  /**
   * <p>The HTTP codes.</p> <p>For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Network Load Balancers, this is 200–399.</p>
   */
  HttpCode: string;
}

export type _UnmarshalledMatcher = _Matcher;
